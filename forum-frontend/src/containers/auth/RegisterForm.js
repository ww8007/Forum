import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFiled, intializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  // 인풋 변경 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeFiled({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    //구현 예정
  };

  // 컴포넌트 처음 랜더링 시 form 초기화
  useEffect(() => {
    dispatch(intializeForm('register'));
  }, [dispatch]);
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    ></AuthForm>
  );
};

export default RegisterForm;
