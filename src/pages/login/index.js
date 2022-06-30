import React from 'react'
import './index.css'

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

function LoginPage() {
  return (
    <div className="titleLogin">
    <h1>Bem vindo!</h1>
    <span>
      Olá, estamos muito felizes por te receber aqui, logue junte-se a
      nós.
    </span>
  </div>
  <form className="inputs">
    <input
      type="text"
      id="user"
      placeholder="Usuário"
      name="user"
      required
    />
    <input
      type="password"
      id="pass"
      placeholder="Senha"
      name="password"
      required
    />
    <span>Esqueceu sua senha?</span>
    <input id="submit" type="submit" value="Logar-se" />
  </form>
  <div className="continueWith">
    <hr className="hrLeft" />
    <span className="textHr">Ou continuar com</span>
    <hr className="hrRight" />
  </div>
  <div className="iconWith">
    <FcGoogle className="icon" />
    <FaApple className="icon" />
    <VscGithub className="icon" />
  </div>
  <div className="registerNow">
    <span>
      Ainda não é membro?{" "}
      <span className="registerText">Registre-se agora!</span>
    </span>
  </div>
  )
}

export default LoginPage