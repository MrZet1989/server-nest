/// <reference types="mongoose" />
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<import("mongoose").Document>;
    login({ login, password }: AuthDto): Promise<{
        acces_token: string;
    }>;
}
