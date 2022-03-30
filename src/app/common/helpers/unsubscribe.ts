import { Injectable, OnDestroy } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable()
export class EpUnsubscribe implements OnDestroy {
    protected destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
