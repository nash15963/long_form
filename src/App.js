import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password'); // To retrieve the current value of the password field

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password', { required: "Password is required" })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          type="password" 
          id="confirmPassword" 
          {...register('confirmPassword', { 
            validate: value => value === password || "The passwords do not match" 
          })} 
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" {...register('age', { required: true })} />
        {errors.age && <span>This field is required</span>}
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default App;
