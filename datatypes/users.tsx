/* eslint-disable @next/next/no-img-element */
import { User, Prisma } from '@prisma/client';

import { columnsElement } from './types';

export const columns: columnsElement<User>[] =
  Object.keys(Prisma.UserScalarFieldEnum)
    // .filter(key => !'id_token'.includes(key))
    .map(key => ({
      name: key,
      getVal: (fkey => {
        switch (fkey) {
              case 'emailVerified':
            return ({emailVerified}: User) => emailVerified ? emailVerified.toLocaleString(): '' ;
          default:
            return (obj: User) => obj[fkey];
        }
      })(key as keyof User)
    }));
