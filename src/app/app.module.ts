import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import SwiperCore, { Navigation, Pagination } from 'swiper';

import { SwiperModule } from 'swiper/angular';

import { AccordionComponent } from '../../projects/accordion/src/lib/accordion.component';
import { BreadcrumbsComponent } from '../../projects/breadcrumbs/src/lib/breadcrumbs.component';
import { ButtonGroupComponent } from '../../projects/button-group/src/lib/button-group.component';
import { DatetimePickerComponent } from '../../projects/datetime-picker/src/lib/datetime-picker.component';
import { DividerComponent } from '../../projects/divider/src/lib/divider.component';
import { DropdownComponent } from '../../projects/dropdown/src/lib/dropdown.component';
import { FormControlComponent } from '../../projects/form-control/src/lib/form-control.component';

import { HelperComponent } from '../../projects/helper/src/lib/helper.component';
import { InputComponent } from '../../projects/input/src/lib/input.component';
import { ProgressBarComponent } from '../../projects/progress-bar/src/lib/progress-bar.component';

import { RangeComponent } from '../../projects/range/src/lib/range.component';
import { StepperComponent } from '../../projects/stepper/src/lib/stepper.component';
import { TableComponent } from '../../projects/table/src/lib/table.component';
import { TabsComponent } from '../../projects/tabs/src/lib/tabs.component';

import { TestimonialsHorizontalComponent } from '../../projects/testimonials-horizontal/src/lib/testimonials-horizontal.component';
import { ToggleComponent } from '../../projects/toggle/src/lib/toggle.component';
import { AComponent } from './a/a.component';

import { AppComponent } from './app.component';
import { DemoBreadcrumbsComponent } from './components/demo-breadcrumbs/demo-breadcrumbs.component';
import { DemoButtonGroupComponent } from './components/demo-button-group/demo-button-group.component';
import { DemoDatetimePickerComponent } from './components/demo-datetime-picker/demo-datetime-picker.component';
import { DemoDropdownComponent } from './components/demo-dropdown/demo-dropdown.component';
import { DemoFormControlComponent } from './components/demo-form-control/demo-form-control.component';
import { DemoPanelComponent } from './components/demo-panel/demo-panel.component';
import { CustomTableRowAComponent } from './components/demo-table/custom-table-row-a/custom-table-row-a.component';
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoTabsComponent } from './components/demo-tabs/demo-tabs.component';
import { DemoToasterComponent } from './components/demo-toaster/demo-toaster.component';
import { DemoToggleComponent } from './components/demo-toggle/demo-toggle.component';
import { LibraryHeaderComponent } from './library-header/library-header.component';
import { TerminalComponent } from './terminal/terminal.component';

SwiperCore.use([ Pagination, Navigation ]);

@NgModule({
    declarations: [
        AppComponent,
        AComponent,
        LibraryHeaderComponent,
        TerminalComponent,
        DemoTableComponent,
        CustomTableRowAComponent,
        DemoToggleComponent,
        DemoToasterComponent,
        DemoDropdownComponent,
        DemoButtonGroupComponent,
        DemoBreadcrumbsComponent,
        DemoTabsComponent,
        DemoPanelComponent,
        DemoDatetimePickerComponent,
        DemoFormControlComponent
    ],
    imports: [
        BrowserModule,
        AccordionComponent,
        DatetimePickerComponent,
        DividerComponent,
        DropdownComponent,
        HelperComponent,
        InputComponent,
        ProgressBarComponent,
        RangeComponent,
        StepperComponent,
        SwiperModule,
        TableComponent,
        TestimonialsHorizontalComponent,
        ToggleComponent,

        RouterModule.forRoot([
            {
                path: 'demo/breadcrumbs',
                component: DemoBreadcrumbsComponent
            },
            {
                path: 'demo/button-group',
                component: DemoButtonGroupComponent
            },
            {
                path: 'demo/datetime-picker',
                component: DemoDatetimePickerComponent
            },
            {
                path: 'demo/dropdown',
                component: DemoDropdownComponent
            },
            {
                path: 'demo/form-control',
                component: DemoFormControlComponent
            },
            {
                path: 'demo/panel',
                component: DemoPanelComponent
            },
            {
                path: 'demo/table',
                component: DemoTableComponent
            },
            {
                path: 'demo/tabs',
                component: DemoTabsComponent
            },
            {
                path: 'demo/toaster',
                component: DemoToasterComponent
            },
            {
                path: 'demo/toggle',
                component: DemoToggleComponent
            }
        ]),
        ButtonGroupComponent,
        BreadcrumbsComponent,
        TabsComponent,
        FormControlComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
