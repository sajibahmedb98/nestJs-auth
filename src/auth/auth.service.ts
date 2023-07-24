import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
   async signUp(){
        return {message:'signup successfull'}
    }

    async signIn(){
        return {message:'signin successfull'}
    }

    async signOut(){
        return {message:'signout successfull'}
    }

        
}
