'use client';

import { forwardRef } from 'react';

import { Circle, Check } from 'lucide-react';

import { cn } from '../../lib/utils';
import { Label } from '../Label';

export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  steps: string[];
  step: number;
}

const baseStepClass =
  'flex items-center justify-center w-6 h-6 rounded-full shrink-0';

function StepIn() {
  return (
    <span data-testid="stepper-step-in" className={`${baseStepClass} bg-brand`}>
      <Circle className="w-1.5 h-1.5 text-white fill-white" />
    </span>
  );
}

function StepNext() {
  return (
    <span
      data-testid="stepper-step-next"
      className={`${baseStepClass} border-2 border-gray-200 bg-white`}
    >
      <Circle className="w-1.5 h-1.5 text-gray-200 fill-gray-200" />
    </span>
  );
}

function StepPast() {
  return (
    <span
      data-testid="stepper-step-past"
      className={`${baseStepClass} bg-brand`}
    >
      <Check strokeWidth={2} className="w-4 h-4 text-white" />
    </span>
  );
}

const Stepper = forwardRef<HTMLOListElement, StepperProps>((props, ref) => {
  const { step, steps, className } = props;

  const edgeClass =
    ' w-full after:content-[""] after:w-full after:h-0.5 after:inline-block after:absolute after:top-3 after:left-4';
  const edgePastClass = edgeClass + ' after:bg-gray-200';
  const edgeNextClass = edgeClass + ' after:bg-brand';

  return (
    <ol
      ref={ref}
      className={cn('flex items-center w-full', className)}
      data-testid="stepper"
    >
      {steps.map((s, idx) => {
        const isLastStep = idx === steps.length - 1;
        const stepClass = isLastStep ? '' : edgeClass;
        let flowClass = isLastStep ? '' : edgePastClass;
        let textClass = 'text-gray-300';

        let currentStep = <StepNext />;

        if (idx === step) {
          currentStep = <StepIn />;
          textClass = 'text-brand';
        } else if (idx < step) {
          currentStep = <StepPast />;
          textClass = 'text-gray-500';
          flowClass = isLastStep ? 'w-fit' : edgeNextClass;
        }

        return (
          <li
            data-testid={`stepper-item-${idx}`}
            key={idx}
            className={`relative flex ${stepClass} ${flowClass}`}
          >
            <div className="block whitespace-nowrap z-10">
              {currentStep}
              <Label className={textClass}>{s}</Label>
            </div>
          </li>
        );
      })}
    </ol>
  );
});

Stepper.displayName = 'Stepper';

export { Stepper };
