import { Component } from "@angular/core";
import { ControlContainer, FormGroupDirective } from "@angular/forms";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
    selector: "ep-text-field",
    templateUrl: "./text-field.component.html",
    styleUrls: [
        "./text-field.component.less",
        "../form-control.component.less"
    ],
    viewProviders: [{
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }]
})
export class TextFieldComponent extends AbstractFieldComponent {

}
