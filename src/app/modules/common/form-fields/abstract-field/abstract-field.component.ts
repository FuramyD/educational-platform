import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "ep-abstract-field",
    template: ""
})
export class AbstractFieldComponent {

    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    @Input() controlName: string;

    @Input() label: string;

    public _focused: boolean;
    public _dirty: boolean;

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
