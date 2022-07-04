import React, { useState, createContext, useContext } from "react";
import "./style.css";
import data from "../../data/data.json";
import { BiUserCircle, BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import MyContext from "../../Context/context";

function User() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(MyContext)

  function voltar() {
    console.log(user)
    navigate('/')
  }

  return (
    <div>
      <main id="main-user">
        <BiArrowBack id="btnVoltar" onClick={voltar} />
        <div id="user-img">
          <BiUserCircle id="icon-user-img" />
          <h1 id="nomeUser">{user.nome}</h1>
          <p>{user.signo}</p>
        </div>

        <h1 id="localInfo">
          {user.cidade} - {user.estado}{" "}
          <HiOutlineLocationMarker id="iconLocal" />
        </h1>
        <div id="underline"></div>
        <div id="user-information">
          <div id="user-information-left">
            <div className="information">
              <h2>Idade:</h2>
              <p>{user.idade}</p>
            </div>
            <div className="information">
              <h2>Data de Nascimento:</h2>
              <p>{user.data_nasc}</p>
            </div>
            <div className="information">
              <h2>CPF:</h2>
              <p>{user.cpf}</p>
            </div>
            <div className="information">
              <h2>RG:</h2>
              <p>{user.rg}</p>
            </div>
            <div className="information">
              <h2>Sexo:</h2>
              <p>{user.sexo}</p>
            </div>
            <div className="information">
              <h2>E-mail:</h2>
              <p>{user.email}</p>
            </div>
            <div className="information">
              <h2>Celular:</h2>
              <p>{user.celular}</p>
            </div>
            <div className="information">
              <h2>Telefone:</h2>
              <p>{user.telefone_fixo}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default User;
