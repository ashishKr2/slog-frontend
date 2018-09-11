import { NgModule } from '@angular/core';
import { MatButtonToggleModule, MatExpansionModule} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatSelectModule, MatRadioModule } from '@angular/material'
import 'hammerjs';
@NgModule({
    imports: [
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatChipsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule, MatRadioModule,
        MatButtonToggleModule, MatExpansionModule
    ],
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatChipsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule, MatRadioModule,
        MatButtonToggleModule, MatExpansionModule
    ],
})
export class AppMaterialModule { }