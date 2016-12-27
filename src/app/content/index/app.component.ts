import {Component} from "@angular/core";
import {Customer} from "../../_model/customer";
import {Idle, DEFAULT_INTERRUPTSOURCES} from "@ng-idle/core";
import {Keepalive} from "@ng-idle/keepalive";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    idleState = 'Not started.';
    timedOut = false;
    // lastPing?: Date = null;

    private currentUser: Customer;

    constructor(private idle: Idle, private keepalive: Keepalive) {
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(5);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(5);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
        idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;
        });
        idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
        // idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

        // sets the ping interval to 15 seconds
        keepalive.interval(15);

        // keepalive.onPing.subscribe(() => this.lastPing = new Date());

        this.reset();
    }

    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }

    getLoggedUsername(): string {
        return JSON.parse(localStorage.getItem("currentUser")).name;
    }

    isLoggedIn(): boolean {
        return localStorage.getItem("currentUser") ? true : false;
    }

    title = "Dieter";
}

