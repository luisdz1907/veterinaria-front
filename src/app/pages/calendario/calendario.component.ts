import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  @ViewChild('calendario') calendarComponent!: FullCalendarComponent
  public calendarOptions!: CalendarOptions

private events: any[] = [
    { title: 'Event 1', date: '2023-05-03', color: '#8294C4' },
    { title: 'Event 2', date: '2023-05-05', color: '#8294C4' }
  ]

  ngOnInit(): void {
    this.calendarOptions = {
      contentHeight: 'auto',
      headerToolbar: {
        left: 'prev,today,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      // initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, interactionPlugin],
      dateClick: this.handleDateClick.bind(this),
      initialEvents:[],
      locales: [esLocale]
    };

  }

  handleDateClick(arg: any) {
    let calendarApi = this.calendarComponent.getApi();
    let event = {
      title: 'Mi evento',
      start: arg.date, 
      end: arg.date, 
      allDay: true,
      color: '#8294C4'
    };
    calendarApi.addEvent(event);

  }
}
