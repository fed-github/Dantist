import React from "react";
import foto from "/src/icons/negro.jpg";
import Grid from "./Grid/Grid";
import "./AppContent.css";

export default function AppContent() {
  return (
    <main className="main">

      <div className="photo_section">
        <div className="flex flex-col items-center p-4 bg-gradient-to-r from-[#31135E] to-[#220D48] text-white rounded-lg shadow-md max-w-[90%] mx-auto">
          <img
            src={foto}
            alt="Dentist portrait"
            className="w-44 h-44 rounded-full mt-2 mb-4 bg-white"
          />
          <h2 className="font-semibold text-lg">Стоматолог: Вадим Булатов</h2>
          <p className="text-sm">Адрес: Сhirakchi</p>
        </div>
        {/* <div className="profile-photo">
                    <img src={foto} alt="Описание изображения" />
                </div> */}
      </div>

      <div className="grid_section">
        <div class="grid_title">
          <h2>Основные услуги клиники</h2>
        </div>

        <Grid />
      </div>

      <div className="describtion_section text-white">

        <div class="container max-w-7xl p-5">

          <h1 class="text-4xl font-bold text-center">
            Улыбка вашей мечты с Кобиловым Абдикадиром!
          </h1>

          <p class="text-lg mt-4">
            Приветствуем вас на сайте Dental Clinic! Мы рады
            предложить вам широкий спектр стоматологических услуг,
            предоставляемых опытным и высококвалифицированным
            врачом-стоматологом Кобиловым Абликадиром.
          </p>

          <p class="text-lg mt-4">
            Кобилов Абликадир обладает многолетним опытом работы и непрерывным
            стремлением к совершенствованию своих навыков. Он использует
            только самые передовые методы лечения и новейшее оборудование, чтобы
            обеспечить вам максимально комфортное и безболезненное посещение.
          </p>


          <h2 class="text-3xl font-bold mt-8">Наши преимущества:</h2>

              <ul class="list-disc list-inside text-lg mt-4">

            <li>Опытный и внимательный врач</li>
            <li>Современное оборудование</li>
            <li>Комфортные условия лечения</li>
            <li>Безболезненные процедуры</li>
            <li>Индивидуальный подход</li>
            <li>Доступные цены</li>
          </ul>


          <h2 class="text-3xl font-bold mt-8">Что мы предлагаем:</h2>

          <ul class="list-disc list-inside text-lg text-left mt-4">
            <li>Обследование полости рта</li>
            <li>Лечение кариеса</li>
            <li>Установка имплантов и протезов</li>
            <li>Отбеливание зубов</li>
            <li>Исправление прикуса</li>
            <li>И многое другое!</li>
          </ul>

          <p class="text-lg mt-8">
            Мы также предлагаем нашим пациентам индивидуальный подход и гибкую
            систему скидок.
          </p>

          <p class="text-lg mt-8">
            Позаботьтесь о здоровье вашей улыбки вместе с Кобилов Абликадир!
            Запишитесь на прием уже сегодня!
          </p>

          <h2 class="text-3xl font-bold mt-8">Контакты:</h2>

          <ul class="list-disc list-inside text-lg mt-4">
            <li>Телефон: 8-800-555-35-35</li>
            <li>Email: Qobilov@mail.uz</li>
          </ul>

          <p class="text-lg mt-8">
            <strong>Dental Clinic / DrQobilov</strong>
          </p>

          <p class="text-lg mt-4">
            <strong>Адрес: Улица Пушкина, дом Колотушкина</strong>
          </p>
        </div>
      </div>

      <footer className="w-full mt-4 text-center text-xs border-t border-white pt-2">
        © 2024 All rights reserved.
      </footer>
    </main>
  );
}
