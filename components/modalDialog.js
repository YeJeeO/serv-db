/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";


export default function ModalDialog () {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
  	const closeHandler = () => {
	  setVisible(false);
	  console.log("closed");
	};
  	return <div>
	<Button auto shadow onPress={handler}>
	  Записаться
	</Button>
	<Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}>
        <Modal.Header>
          <Text id="modal-title" size={15}>
     Присоединяйтесь к нам
            </Text>
        </Modal.Header>
	 <form method="POST" action="http://localhost:3000/">
			<Modal.Body>
	  <input  
	        clearable
            bordered
            fullWidth
            size="lg"
			class="form-control" 
			id="exampleInputName" 
			aria-describedby="nameHelp" 
			placeholder="Имя" 
			required/>
	  <input type="phone" name="phone" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="+7 (900)123 45 67" required/>
	  </Modal.Body>
	<Button 
	type="submit" >
		Отправить
	</Button>
</form>
</Modal>
</div>

}



// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
// const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

// const sql = postgres(URL, { ssl: 'require' });

// async function getPgVersion() {
//   const result = await sql`select version()`;
//   console.log(result);
// }

// getPgVersion();