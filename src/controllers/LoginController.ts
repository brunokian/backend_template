import { NextFunction, Request, Response } from "express";
import LoginService from "../services/LoginService";

class LoginController {
    private req: Request;
    private res: Response;
    private next: NextFunction;
    private service: LoginService;

    constructor(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new LoginService();
    }

    public async create() {
        try {
            const newAccount = await this.service.create(this.req.body);
            return this.res.status(201).json(newAccount)
        } catch (err) {
            this.next(err)
        }
    }

    public async findAll() {
        try {
            const list = await this.service.findAll()
            return this.res.status(200).json(list)
        } catch (err) {
            this.next(err)
        }
    }
}

export default LoginController;