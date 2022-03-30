import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";

@Component({
    selector: "ep-abstract-field",
    template: ""
})
export class AbstractFieldComponent implements AfterViewInit {

    @Output()
    public valueChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    public controlName: string;

    @Input()
    public label: string;

    @ViewChild("input")
    private input: { nativeElement: HTMLInputElement };

    public _focused: boolean;
    public _dirty: boolean = false;
    public value: string;

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this._dirty = !!this.input.nativeElement.value;
        this.cdr.detectChanges();
    }

    public _onFocus(): void {
        this._focused = true;
    }

    public _onBlur(): void {
        this._focused = false;
    }

    public _onChange(event: Event): void {
        const { value } = event.target as HTMLInputElement;
        this._dirty = !!value;
        this.valueChange.emit(value);
    }
}
