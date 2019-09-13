export declare class Machine {
    name: string;
    responseTime: number;
    state: any;
    activeHost: boolean;
    activeSwarm: boolean;
    dockerVersion: string;
    constructor(opts: any);
    static options(opts: string | {
        name: string;
    }): {};
    static command(args: any, done: any): void;
    static status(name: string, done: (err?: Error, status?: string) => void): void;
    static isRunning(name: string, done: any): void;
    static create(name: string, driver: any, options: any, done: any): void;
    static start(name: string, done: any): void;
    static stop(name: string, done: any): void;
    static kill(name: string, done: any): void;
    static env(name: string, opts: any, done: any): void;
    static ssh(name: string, cmd: any, done: any): void;
    static inspect(name: string, done: any): void;
    static list(opts: any, done: any): void;
}
