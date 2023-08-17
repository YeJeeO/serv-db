import { Image, Grid, Text, Row, Col, Spacer } from "@nextui-org/react";



const Coach = () => {
  return (
    <div>
      <Text h1 size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold">Только профессиональные педагоги </Text>
      <Grid.Container gap={10}>
        <Row justify="center" align="center">
          <Col gap={10}>
            <Image
              src='16776401116.jpg'
              alt="Иванна Васильева"
              width={400}
              height={350}
            />
            <Text h3 size={15} css={{ textGradient: "50deg, $blue600 -80%, $pink900 100%", m:"$20" ,gap: "$10" }}>Иванна Васильева<Spacer />
              Кемеровский государственный университет культуры и искусств. Бакалавр хореографических искусств.
              Участвовала в Hight heels конвенции. Прошла курс Frame up, онлайн курс Hight heels от Элины Музафаровой,
              онлайн курс танц отеля: работа с детьми дошкольного возраста, курс танц отеля: постановка танца,
              фестиваль народного танца Чили 2011.</Text>
          </Col>
          <Col>
            <Image
              src="16776475.jpg"
              alt="2"
              width={400}
              height={350}
            />
            <Text h3 size={15} css={{ textGradient: "50deg, $blue600 -80%, $pink900 100%", m: "$20", gap: "$10" }}>АНЖЕЛИКА<Spacer />
              Колледж культуры и искусств г. Новосибирск,
              5 лет в студии «тодес», 15 лет артист балета (работа в Европе, Китае).
              Год работала в Пекине танцором и хореографом.</Text>
          </Col>
        </Row>
      </Grid.Container>
    </div>
  )
};

export default Coach;