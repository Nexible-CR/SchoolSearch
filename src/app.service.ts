import { Injectable } from '@nestjs/common';
import {Neis} from "neis.ts"
import { config } from 'dotenv'; config();

const env = process.env;


@Injectable()
export class AppService {
  
  async getSchools(startsWith: string) {
    
    const neis = new Neis({
      key: env.KEY,
    });

    const schoolNames: {[key: number] : [string, string, string]} = {};

    await neis
      .getSchool({
        SCHUL_NM: startsWith
      })
      .then((res) => {
        let i: number = 0;
        for (const value of res.values()) {
          schoolNames[i] = [value.SCHUL_NM, value.ORG_RDNMA, value.SD_SCHUL_CODE]
          i++ 
        } 
        
      })
      .catch((err) => {
        // return {error: err}
         schoolNames[err] = ["error", "content", String(err)]
      });
      return schoolNames
  }
}
