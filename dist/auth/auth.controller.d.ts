import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<any>;
    findAll(): string;
}
