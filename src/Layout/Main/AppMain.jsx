import React, { useState } from "react";
import foto from "/src/icons/negro.jpg";
import Grid from "./Grid/Grid";
import "./AppMain.css";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import InfoIcon from "@mui/icons-material/Info";
import ReplyIcon from "@mui/icons-material/Reply";

export default function AppMain() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className="main">
      <div className="photo_section" id="блок0">
        <div className="flex flex-col items-center p-4 bg-gradient-to-r from-[#31135E] to-[#220D48] text-white rounded-lg shadow-md max-w-[90%] mx-auto">
          <img
            src={foto}
            alt="Dentist portrait"
            className="w-44 h-44 rounded-full mt-2 mb-4 bg-white"
          />
          <Tooltip
            title="Стоматолог с многолетним опытом работы"
            arrow
            placement="top"
          >
            <IconButton className="ml-2 p-0 m-0 text-white">
              <h2 className="font-semibold text-lg text-white m-0 p-0">
                Стоматолог: Вадим Булатов
              </h2>
            </IconButton>
          </Tooltip>

          <p className="text-sm">Адрес: Сhirakchi</p>
          <Button
            onClick={handleOpen}
            style={{ marginTop: "15px" }}
            variant="contained"
          >
            Номер телефона
          </Button>
        </div>
      </div>

      <div id="блок1" className="grid_title">
        <h2>Основные услуги клиники</h2>
      </div>

      <Grid />

      <div id="блок2" className="describtion_section text-white">
        <div className="container max-w-7xl p-5">
          <h1 className="text-4xl font-bold text-center">
            Улыбка вашей мечты с Кобиловым Абдикадиром!
          </h1>

          <p className="text-lg mt-4">
            Приветствуем вас на сайте Dental Clinic! Мы рады предложить вам
            широкий спектр стоматологических услуг, предоставляемых опытным и
            высококвалифицированным врачом-стоматологом Кобиловым Абликадиром.
          </p>

          <p className="text-lg mt-4">
            Кобилов Абликадир обладает многолетним опытом работы и непрерывным
            стремлением к совершенствованию своих навыков. Он использует только
            самые передовые методы лечения и новейшее оборудование, чтобы
            обеспечить вам максимально комфортное и безболезненное посещение.
          </p>

          <h2 className="text-3xl font-bold mt-8">Наши преимущества:</h2>

          <ul className="list-disc list-inside text-lg mt-4">
            <li>Опытный и внимательный врач</li>
            <li>Современное оборудование</li>
            <li>Комфортные условия лечения</li>
            <li>Безболезненные процедуры</li>
            <li>Индивидуальный подход</li>
            <li>Доступные цены</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8">Что мы предлагаем:</h2>

          <ul className="list-disc list-inside text-lg text-left mt-4">
            <li>Обследование полости рта</li>
            <li>Лечение кариеса</li>
            <li>Установка имплантов и протезов</li>
            <li>Отбеливание зубов</li>
            <li>Исправление прикуса</li>
            <li>И многое другое!</li>
          </ul>

          <p className="text-lg mt-8">
            Мы также предлагаем нашим пациентам индивидуальный подход и гибкую
            систему скидок.
          </p>

          <p className="text-lg mt-8">
            Позаботьтесь о здоровье вашей улыбки вместе с Кобилов Абликадир!
            Запишитесь на прием уже сегодня!
          </p>

          <h2 className="text-3xl font-bold mt-8" id="блок3">
            Контакты:
          </h2>

          <ul className="list-disc list-inside text-lg mt-4">
            <li>Телефон: 8-800-555-35-35</li>
            <li>Email: Qobilov@mail.uz</li>
          </ul>

          <p className="text-lg mt-8">
            <strong>Dental Clinic / DrQobilov</strong>
          </p>

          <p className="text-lg mt-4">
            <strong>Адрес: Улица Пушкина, дом Колотушкина</strong>
          </p>
        </div>
      </div>

      <footer className="w-full mt-4 text-center text-xs border-t border-white pt-2">
        © 2024 All rights reserved.
      </footer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-lg w-80 sm:w-full">
            <h2 id="parent-modal-title" className="text-2xl mb-4">
              Info:
            </h2>
            <p id="parent-modal-description" className="mb-4 font-bold">
              Tel: +998-90-546-45-45
            </p>

            <p id="parent-modal-description" className="mb-4">
              Время работы: c 9:00 до 17:00 
            </p>
            <p id="parent-modal-description" className="mb-2">
              Обед: 13:00 "1 час"
            </p>
            <p id="parent-modal-description" className="mb-0">
              Воскресение - выходной{" "}
              <Tooltip title="Он играет в контр страйк" arrow placement="top">
                <IconButton className="ml-2 p-0 m-0 text-white">
                  <p className="font-semibold text-lg text-white m-0 p-0">
                    <InfoIcon />
                  </p>
                </IconButton>
              </Tooltip>
            </p>
            <Button
              onClick={handleClose}
              style={{ marginTop: "15px" }}
              variant="contained"
            >
              Ну ладно <ReplyIcon className="ml-2" />
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
