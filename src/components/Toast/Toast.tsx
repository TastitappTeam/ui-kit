import { forwardRef } from 'react';

import { toast as _toast, ToastBar, Toaster } from 'react-hot-toast';
import { X } from 'lucide-react';

export interface ToastProps {
  durationMs?: number;
}

const colorGreen300 = '#A3DABD';
const colorRed300 = '#CA0219';
const colorWhite = '#FFFFFF';
const colorGrey100 = '#B4B9C4';
const colorBlue300 = '#004969';

export const toast = _toast;

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const { durationMs, ...rest } = props;

  return (
    <div ref={ref} data-testid="toast">
      <Toaster
        data-testid="toast"
        position="top-right"
        toastOptions={{
          duration: durationMs,
          className:
            'w-full max-w-md bg-white border border-gray-300 rounded-md p-4 font-AvenirNext text-sm text-gray-900',
          success: {
            iconTheme: {
              primary: colorGreen300,
              secondary: colorWhite,
            },
          },
          error: {
            iconTheme: {
              primary: colorRed300,
              secondary: colorWhite,
            },
          },
          loading: {
            iconTheme: {
              secondary: colorGrey100,
              primary: colorBlue300,
            },
          },
        }}
        {...rest}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <div className="w-full flex justify-between gap-2">
                <div className="flex gap-2">
                  {icon}
                  {message}
                </div>
                <button onClick={() => toast.dismiss(t.id)}>
                  <X size={16} />
                </button>
              </div>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
});

Toast.displayName = 'Toast';

export { Toast };
