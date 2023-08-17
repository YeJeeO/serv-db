// import ModalDialog from "./form/modal";
import * as React from 'react';
import { Container, Card, Row, Text, Spacer} from "@nextui-org/react";
import ModalDialog from './modalDialog';
import {Divider} from "@nextui-org/react";



export default function Footer() {
    return (<>
           
      <div className="flex gap-4">
      <Divider orientation="vertical"/>
      <div>Новосибирск,<Spacer/>
КЗ Евразия, Селезнёва, 46 <Spacer/>
Арт резиденция Юность, Строителей, 21<Spacer/>
</div>
            <div>+7 (383) 304-83-23</div>
               <div><ModalDialog/></div>
       </div>
        </>
    );
  }