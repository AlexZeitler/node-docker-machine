export declare type MachineState = 'running';
export declare type Driver = 'amazonec' | 'azure' | 'digitalocean' | 'exoscale' | 'g5k' | 'google' | 'hetzner' | 'hyperv' | 'linode' | 'openstack' | 'rackspace' | 'scaleway' | 'softlayer' | 'virtualbox' | 'vmwarefusion' | 'vmwarevcloudair' | 'vmwarevsphere' | 'vmwareworkstation' | 'vmwareworkstation' | '';
export declare type Options = string | {
    name?: string;
};
export declare class Machine {
    name: string;
    responseTime: number;
    state: any;
    activeHost: boolean;
    activeSwarm: boolean;
    dockerVersion: string;
    constructor(opts?: Options);
    static options(opts?: Options): Options;
    static command(args: any, done: any): void;
    static status(name: string, done: (err?: Error, status?: string) => void): void;
    static isRunning(name: string, done: (err?: Error, status?: boolean) => void): void;
    static create(name: string, driver: Driver, options?: any, done?: (err?: Error) => void): void;
    static start(name: string, done: (err?: Error) => void): void;
    static stop(name: string, done: (err?: Error) => void): void;
    static kill(name: string, done: (err?: Error) => void): void;
    static env(name: string, opts?: {
        shell?: string;
        parse?: boolean;
    }, done?: (err?: Error, env?: object) => void): void;
    static ssh(name: string, cmd: any, done: any): void;
    static inspect(name: string, done: any): void;
    static list(opts: any, done: any): void;
}
