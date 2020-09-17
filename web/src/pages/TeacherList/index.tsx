import React, { useState, useEffect, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import "./styles.css";

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    api
      .get("/classes", {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then((response) => {
        setTeachers(response.data);
      })
      .catch(() => {
        setTeachers([]);
      });
  }, [subject, week_day, time]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              {
                value: "Artes",
                label: "Artes",
              },
              {
                value: "Matemática",
                label: "Matemática",
              },
              {
                value: "Biologia",
                label: "Biologia",
              },
              {
                value: "História",
                label: "História",
              },
              {
                value: "Português",
                label: "Português",
              },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              {
                value: "0",
                label: "Domingo",
              },
              {
                value: "1",
                label: "Segunda-feira",
              },
              {
                value: "2",
                label: "Terça-feira",
              },
              {
                value: "3",
                label: "Quarta-feira",
              },
              {
                value: "4",
                label: "Quinta-feira",
              },
              {
                value: "5",
                label: "Sexta-feira",
              },
              {
                value: "6",
                label: "Sábado",
              },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => {
          return <TeacherItem key={String(teacher.id)} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
