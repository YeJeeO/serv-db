/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Image, Grid, Text } from "@nextui-org/react";


const Event = () => {
  return (<>
    <Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", mt: "5%" }} weight="bold">
      Ближайшие мероприятия</Text>
    <Grid.Container gap={5}>
      <Grid>
        <Image
          src="PHOTO-2023-04-21-15-.jpg"
          objectFit="fill"
          alt="1"
          width={250}
          height={450}
        />
      </Grid>
      <Grid>
        <Image
          src="IMG-20230223-WA0020.jpg"
          objectFit="fill"
          alt="1"
          width={250}
          height={450}
        />
      </Grid>
      <Grid>
        <Image
          src="IMG-20230519-WA0028.jpg"
          objectFit="fill"
          alt="3"
          width={250}
          height={450}
        />
      </Grid>
      <Grid>
        <Image
          src="PHOTO-2023-04-21-15-.jpg"
          objectFit="fill"
          alt="1"
          width={250}
          height={450}
        />
      </Grid>
      <Grid>
        <Image
          src="IMG-20230223-WA0020.jpg"
          objectFit="fill"
          alt="1"
          width={250}
          height={450}
        />
      </Grid>

    </Grid.Container>
  </>
  );
};

export default Event;