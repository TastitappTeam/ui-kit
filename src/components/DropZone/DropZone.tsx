'use client';

import React, { forwardRef, useState, ChangeEvent, DragEvent } from 'react';

import { MonitorUp, CircleX, CircleCheck } from 'lucide-react';

import { cn } from '../../lib/utils';

interface IDragDropProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
  onFileLoaded?: (file: File | null) => void;
  allowed?: string[];
}

const Status = {
  NORMAL: 'normal',
  FAILED: 'failed',
  LOADED: 'loaded',
} as const;

const LoadedStatus = {
  normal: {
    style: 'text-black',
    icon: <MonitorUp className="w-7 h-7" />,
  },
  failed: {
    style: 'text-red-600',
    icon: <CircleX className="w-7 h-7" />,
  },
  loaded: {
    style: 'text-green-600',
    icon: <CircleCheck className="w-7 h-7" />,
  },
};

const DropZone = forwardRef<HTMLInputElement, IDragDropProps>((props, ref) => {
  const { placeholder, onFileLoaded, allowed = ['.yaml'], className } = props;

  // const inputFileRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState<keyof typeof LoadedStatus>(
    Status.NORMAL
  );
  const [fileName, setFileName] = useState<string>(placeholder);

  const loadedClass = LoadedStatus[isLoaded].style;
  const loadedIcon = LoadedStatus[isLoaded].icon;

  function isValidFile(file: string) {
    const fileExtension = file.split('.').pop();
    if (!fileExtension || !allowed.includes(fileExtension)) {
      setIsLoaded(Status.FAILED);
      setFileName(
        `Oups! Fichier non autorisé. Autorisé: ${allowed.toString()}`
      );
      onFileLoaded?.(null);
      return false;
    }
    return true;
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        if (!isValidFile(file.name.toLowerCase())) {
          return;
        } else {
          setIsLoaded(Status.LOADED);
          setFileName(file.name);

          onFileLoaded?.(file);
        }
      });
    }
  }

  function handleOnDropHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();

    if (e.dataTransfer.items) {
      Array.from(e.dataTransfer.items).forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();

          if (file && !isValidFile(file.name.toLowerCase() || '')) {
            return;
          } else {
            setIsLoaded(Status.LOADED);
            setFileName(file?.name || ''); // Added null check and fallback value

            onFileLoaded?.(file);
          }
        }
      });
    } else {
      Array.from(e.dataTransfer.files).forEach((file) => {
        if (!isValidFile(file.name.toLowerCase())) {
          return;
        } else {
          setIsLoaded(Status.LOADED);
          setFileName(file.name);

          onFileLoaded?.(file);
        }
      });
    }
  }

  function handleDragOverHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <form>
      <div
        data-testid="drag-drop"
        className="w-full"
        id="drop_zone"
        onDrop={handleOnDropHandler}
        onDragOver={handleDragOverHandler}
      >
        <label
          className={cn(
            'flex justify-center w-full h-24 px-4 transition',
            loadedClass,
            'bg-gray-50 hover:bg-gray-100 border-2 border-dashed appearance-none cursor-pointer rounded-md font-AvenirNext',
            className
          )}
        >
          <div className="flex items-center space-x-3">
            {loadedIcon}
            <span>{fileName}</span>
          </div>
          <input
            onChange={handleOnChange}
            ref={ref}
            accept="*.yaml"
            type="file"
            name="upload"
            className="hidden"
          />
        </label>
      </div>
    </form>
  );
});

DropZone.displayName = 'DropZone';

export { DropZone };
