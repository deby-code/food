import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { groceries } from '../../models/groceries';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-my-food-list',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './my-food-list.html',
  styleUrl: './my-food-list.css'
})
export class MyFoodList implements AfterViewInit {
  public groceries = groceries;
  displayedColumns: string[] = ['nombre', 'gramos', 'calorias', 'proteinas', 'carbohidratos', 'grasas', 'caloriasGramo', 'proteinasGramo', 'carbohidratosGramo', 'grasasGramo'] ;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(groceries);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

