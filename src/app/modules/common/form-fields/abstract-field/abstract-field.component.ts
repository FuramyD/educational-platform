import { Component, Input } from "@angular/core";

@Component({
    selector: "ep-abstract-field",
    template: ""
})
export class AbstractFieldComponent {

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
    }

}
