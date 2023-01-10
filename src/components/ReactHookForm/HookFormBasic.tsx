import { useRouter } from 'next/router';
import React from 'react';
import { Path, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { addParamsToPath } from '../../utils/queryParamUtils';

interface IFormValues {
  'First Name': string;
  Age: number;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(function Select({ onChange, onBlur, name, label }, ref) {
  return (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  );
});

const HookFormBasic = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>();
  const router = useRouter();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        <Select label="Age" {...register('Age')} />
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          router.push(addParamsToPath('/', { name: 'rahul', age: '20' }));
        }}
      >
        redirect
      </button>
    </div>
  );
};
export default HookFormBasic;
