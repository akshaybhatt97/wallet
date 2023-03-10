import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import useApi from "../../hooks/useApi";
import { Form, Input, Button, StyledLink, MyWalletTitle } from "../../components/FormComponents";
import Container from "../../components/Container";
import { UserContext } from "../../context/user";
import { fireAlert } from "../../utils/alerts";

export default function SignIn() {
  const navigate = useNavigate();
  const api = useApi();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate("/");
    //eslint-disable-next-line
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await api.user.signIn(formData);

      setIsLoading(false);
      setUser({ token: data.token, username: data.username });
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      fireAlert(error.response.data);
    }
  }

  return (
    <Container center>
      <MyWalletTitle>My Wallet</MyWalletTitle>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Submit"}
        </Button>
      </Form>

      <StyledLink to="/signup">New to wallet? Sign in!</StyledLink>
    </Container>
  );
}
