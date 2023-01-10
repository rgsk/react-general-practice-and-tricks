import clsx from 'clsx';
import { forwardRef, useLayoutEffect, useRef } from 'react';
interface IForwardingRefProps {}
const ForwardingRef: React.FC<IForwardingRefProps> = ({}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    console.log(buttonRef.current?.textContent);
  }, []);
  return (
    <div>
      <Button ref={buttonRef} variant={'success'}>
        fdsfsd
      </Button>
    </div>
  );
};
export default ForwardingRef;

interface IButtonProps {
  children: React.ReactNode;
  variant: 'success' | 'danger';
}
const Button = forwardRef<HTMLButtonElement, IButtonProps>(function Button(
  { children, variant },
  ref
) {
  return (
    <div>
      <button
        ref={ref}
        className={clsx(variant === 'success' ? 'bg-green-500' : 'bg-red-500')}
      >
        {children}
      </button>
      ;
      <SomeUglyComponent />
    </div>
  );
});
interface ISomeUglyComponentProps {}
const SomeUglyComponent: React.FC<ISomeUglyComponentProps> = ({}) => {
  return <div>SomeUglyComponent</div>;
};
