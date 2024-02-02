'use client'
import { addHours, startOfDay } from 'date-fns';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useCallback, useState } from 'react';
import { Calendar, Event, NavigateAction, View, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function MyCalendar() {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState<View | undefined>('day')
  const localizer = momentLocalizer(moment);

  const handleSelect = (event: Event) => {
    console.log('Selecionado:', event);
  };

  const handleNavigate = (date: Date, view: View, action: NavigateAction) => {
    setDate(date)
    setView(view)
  };

  const onView = useCallback((newView: any) => setView(newView), [setView])

  const events = [
    {
      title: 'Evento 1',
      start: addHours((startOfDay(new Date())), 8),
      end: addHours((startOfDay(new Date())), 9),
      resourceId: 'sala1',
      color: '#c50371'
    },
    {
      title: 'Evento 2',
      start: addHours((startOfDay(new Date())), 9),
      end: addHours((startOfDay(new Date())), 10),
      resourceId: 'sala2',
      color: '#0371c5'
    },
    {
      title: 'Evento 3',
      start: addHours((startOfDay(new Date())), 10),
      end: addHours((startOfDay(new Date())), 11),
      resourceId: 'sala3',
      color: '#03c52d'
    },
  ];

  const resources = [
    { id: 'sala1', title: 'Sala 1' },
    { id: 'sala2', title: 'Sala 2' },
    { id: 'sala3', title: 'Sala 3' },
  ];

  const messages = {
    today: 'Hoje',
    next: 'Próximo',
    previous: 'Anterior',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
  };

  const min = addHours(startOfDay(new Date()), 6);
  const max = addHours(startOfDay(new Date()), 19);

  return (
    <div className=' bg-white'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        onNavigate={handleNavigate}
        defaultView={view}
        view={view}
        date={date}
        resources={resources}
        messages={messages}
        onView={onView}
        onSelectEvent={handleSelect}
        min={min}
        max={max}
        eventPropGetter={(event: any) => {
          return {
            style: {
              backgroundColor: event.color,
              /*                color: '#fff',
                            borderRadius: '4px', */
            }
          }
        }}
      />
    </div>
  );
};
