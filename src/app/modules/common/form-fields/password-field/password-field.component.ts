import { Component, Input } from "@angular/core";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
    selector: "ep-password-field",
    templateUrl: "./password-field.component.html",
    styleUrls: [
        "./password-field.component.less",
        "../form-control.component.less"
    ],
    viewProviders: [{
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }]
})
export class PasswordFieldComponent extends AbstractFieldComponent {

    @Input() visible: boolean = false;

    _toggleVisibility(): void {
        this.visible = !this.visible;
    }
}
