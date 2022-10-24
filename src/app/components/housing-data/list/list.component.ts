import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HousingData } from '../housing-data';

const DATA_TABLE_LABEL_MAP: { [key in keyof HousingData]?: string } = {
  rent: '賃料',
  layout: '間取り',
};

@Component({
  standalone: true,
  selector: 'housing-data-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousingDataListComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<HousingData>([
    {
      rent: 10000,
      layout: 'あああああああああああああああああああああ',
    } as any,
    {
      rent: 200,
      layout: 'かわいい',
    } as any,
  ]);

  displayedDataColumns: (keyof HousingData)[] = ['rent', 'layout'];

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getDataColumnLabel(key: keyof HousingData) {
    return DATA_TABLE_LABEL_MAP[key];
  }
}
