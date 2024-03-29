import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, APIs } from "../plugins/api";
import {
  InputGroup,
  InputLeftElement,
  HStack,
  FormControl,
  VStack,
  Input,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import { validateEmail, validatePassword } from "../plugins/validator";
import CancelButton from "../Components/Form/CancelButton";
import SubmitButton from "../Components/Form/SubmitButton";
import FormWrapper from "../Components/Form/FormWrapper";
import useAuth from "../Hooks/useAuth";
import { dashboard, register } from "../Global/Routes";
import { handleApiErrors } from "../plugins/utils";
import Navbar from "../Components/Navbar";
import useNotifs from "../Hooks/useNotifs";

export default function Login() {
  const { setAuth } = useAuth();

  // TODO: https://youtu.be/oUZjO00NkhY?list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&t=1010
  const navigate = useNavigate();
  const { notifs, setNotifs } = useNotifs();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState({ email: "", err: false });
  const [password, setPassword] = useState({ password: "", err: false });
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmit(true);
    const tmpErrors = [];
    if (validateEmail(email.email)) tmpErrors.push(validateEmail(email.email));
    if (validatePassword(password.password))
      tmpErrors.push(validatePassword(password.password));

    if (tmpErrors.length > 0) {
      setNotifs({ ...notifs, errors: [...tmpErrors] });
      setDisableSubmit(false);
    } else {
      const data = {
        email: email.email,
        password: password.password,
      };

      // TODO: cleanCode (seperate file)
      const request = APIs.auth.login;
      request.data = data;
      api(request)
        .then((res) => {
          if (res.status === 200) {
            setAuth({
              email: res.data.data.email,
              name: res.data.data.name,
              access_token: res.data.access_token,
              token_type: res.data.token_type,
            });
            navigate(dashboard);
          }
        })
        .catch((err) => {
          handleApiErrors(err, setNotifs, setDisableSubmit);
        });
    }
  };

  return (
    <>
      <Navbar />
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Box display={"flex"} flexDir="column">
            <Box pt={"10px"} pb={"14px"}>
              <Text textAlign={"center"} fontSize="sm" color="gray">
                لطفا ایمیل و رمز عبور خود را وارد کنید.
              </Text>
            </Box>
            <Box>
              <VStack spacing={"10px"}>
                <FormControl isInvalid={email.err}>
                  <Input
                    id="email"
                    value={email.email}
                    onChange={(e) => {
                      setEmail({ ...email, email: e.target.value });
                    }}
                    placeholder="ایمیل"
                    size="md"
                  />
                </FormControl>
                <InputGroup size="md">
                  <Input
                    id="password"
                    pr="15px"
                    value={password.password}
                    onChange={(e) => {
                      setPassword({ ...password, password: e.target.value });
                    }}
                    type={show ? "text" : "password"}
                    placeholder="رمز عبور"
                  />
                  <InputLeftElement width="3.2rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      <ViewIcon />
                    </Button>
                  </InputLeftElement>
                </InputGroup>
              </VStack>
            </Box>
            <Box mt={"10px"}>
              <Link to={"#"}>
                <Text fontSize={"sm"}>فراموشی رمز عبور</Text>
              </Link>
            </Box>
            <Box pt="20px">
              <HStack
                display={"flex"}
                justifyContent="space-around"
                justify={"left"}
                spacing={"10px"}
              >
                <SubmitButton disableSubmit={disableSubmit} text="ورود" />
                <CancelButton />
              </HStack>
            </Box>
          </Box>
        </form>
        <Box pt={"20px"} textAlign="center">
          <Text fontSize={".8rem"}>
            حساب کاربری ندارید؟ <Link to={register}>ثبت نام کنید</Link>
          </Text>
        </Box>
      </FormWrapper>
    </>
  );
}
