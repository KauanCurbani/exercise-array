import React from "react";
import "./style.css";
import data from "../../data/data.json";
import { BiUserCircle, BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  let currUser = 15;
  currUser = localStorage.getItem("index");

  function voltar() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <main id="main-user">
        <BiArrowBack id="btnVoltar" onClick={voltar} />
        <div id="user-img">
          <BiUserCircle id="icon-user-img" />
          <h1 id="nomeUser">{data[currUser].nome}</h1>
          <p>{data[currUser].signo}</p>
        </div>
          <div id="underline"></div>
        <div id="user-information">
          <div id="user-information-left">
            <div className="information">
              <h2>Idade:</h2>
              <p>{data[currUser].idade}</p>
            </div>
            <div className="information">
              <h2>Data de Nascimento:</h2>
              <p>{data[currUser].data_nasc}</p>
            </div>
            <div className="information">
              <h2>CPF:</h2>
              <p>{data[currUser].cpf}</p>
            </div>
            <div className="information">
              <h2>RG:</h2>
              <p>{data[currUser].rg}</p>
            </div>
            <div className="information">
              <h2>Sexo:</h2>
              <p>{data[currUser].sexo}</p>
            </div>
            <div className="information">
              <h2>E-mail:</h2>
              <p>{data[currUser].email}</p>
            </div>
            <div className="information">
              <h2>Celular:</h2>
              <p>{data[currUser].celular}</p>
            </div>
            <div className="information">
              <h2>Telefone:</h2>
              <p>{data[currUser].telefone_fixo}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default User;
