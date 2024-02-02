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
      title: 'Evento 3',
      start: new Date(2024, 1, 2, 12, 0),
      end: new Date(2024, 1, 2, 13, 0),
      resourceId: 'sala3',
    },
  ];

  const resources = [
    { id: 'sala1', title: 'Sala 1' },
    { id: 'sala2', title: 'Sala 2' },
    { id: 'sala3', title: 'Sala 3' },
  ];
```