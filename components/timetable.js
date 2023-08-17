import { Table, Text } from '@nextui-org/react';

const Schedule= () => {
  const columns = [
    {
      key: "group",
      label: "GROUP",
    },
    {
      key: "Coach",
      label: "COACH",
    },
    {
      key: "time",
      label: "TIME",
    },
  ];
  const rows = [
    {
      key: "1",
      group: "Сапфиры",
      Coach: "Иванна",
      time: "18:00 ВТ  Чт",
    },
    {
      key: "2",
      group: "M&M",
      Coach: "Анжелика",
      time: "18:00 ПН  СР  ПТ",
    },
    {
      key: "3",
      group: "Балет",
      Coach: "Анжелика",
      time: "10:00 ПН  ЧТ",
    },
    {
      key: "4",
      group: "Алмазы",
      Coach: "Анжелика",
      time: "17:00 ПН  СР  ПТ",
    },
    {
      key: "5",
      group: "Сфера",
      Coach: "Иванна",
      time: "19:00 ВТ  ЧТ",
    },
  ];
  return (<>
  <Text h1  size={60} css={{textGradient: "45deg, $blue600 -20%, $pink600 50%", mt: "5%"}} weight="bold">Расписание</Text>
      <Table
      aria-label="Time table"
      css={{
        height: "100%",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    </>
  );
}
  export default Schedule;
  