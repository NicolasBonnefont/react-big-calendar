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
      start: new Date(2024, 1, 2, 8, 0),
      end: new Date(2024, 1, 2, 9, 0),
      resourceId: 'sala1',
    },
    {
      title: 'Evento 2',
      start: new Date(2024, 1, 2, 10, 0),
      end: new Date(2024, 1, 2, 11, 0),
      resourceId: 'sala2',
    },
    {
      title: 'Evento 2',
      start: new Date(2024, 1, 2, 12, 0),
      end: new Date(2024, 1, 2, 13, 0),
      resourceId: 'sala3',
    },
    {
      title: 'Evento 2',
      start: new Date(2024, 1, 2, 14, 0),
      end: new Date(2024, 1, 2, 15, 0),
      resourceId: 'sala3',
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
        eventPropGetter={event => {
          return {
            style: {
              /*               backgroundColor: '#010036',
                            color: '#fff',
                            borderRadius: '4px', */
            }
          }
        }}
      />
    </div>
  );
};
