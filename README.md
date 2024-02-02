## Modelo de calendario usando react-big-calendar

Clone o repositorio e instale as dependências

```bash
npm install
# or
bun i
```
Rode o projeto

```bash
npm run dev
# or
bun dev
```
Altere os eventos e os resources

```bash
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
```
