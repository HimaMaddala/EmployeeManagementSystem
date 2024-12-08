
const API_ENDPOINTS = {
    SIGNUP_API: '/auth/register',
    LOGIN_API: '/auth/login',
    APP_USER_DETAILS_API: '/user/user-details',
    APP_FORGOT_PASSWORD_API: '/auth/forget-password',
    APP_RESET_PASSWORD_API: '/auth/reset-password',

    EMPLOYEE_LOGIN_API: '/auth/login/employee',

    // employees
    GET_EMPLOYEES_API: '/app/employees',
    GET_EMPLOYEE_BY_ID: (id: string) => `/app/employees/${id}`,
    UPDATE_EMPLOYEE_DETAILS_API: (id: string) => `/app/employees/${id}`,

    // notifications
    SAVE_NOTIFICATION_API: '/notification',
    GET_EMPLOYEE_NOTIFICATION_API: (id: string) => `/notification/${id}`,
    MARK_READ_NOTIFICATIONS_API: (id: string) => `/notification/${id}/emp-read`,

    GET_ADMIN_ID_API: '/app/employees/admin/ids',

    // admin employee
    GET_ADMIN_EMPLOYEES_API: '/admin/employees',
    GET_ALL_EMP_IDS_API: '/admin/employees/empIds',
    CREATE_ADMIN_EMPLOYEE_API: (id: string) => `/admin/employees/${id}`,
    GET_ADMIN_EMPLOYEE_BY_ID: (id: string) => `/admin/employees/${id}`,
    UPDATE_ADMIN_EMPLOYEE_BY_ID: (id: string, departmentId: string) => `/admin/employees/${id}/${departmentId}`,
    DELETE_ADMIN_EMPLOYEE_BY_ID: (id: string) => `/admin/employees/${id}`,


    // departments
    GET_ADMIN_ALL_DEPARTMENTS_API: '/admin/departments',
    CREATE_ADMIN_ALL_DEPARTMENTS_API: '/admin/departments',
    GET_ADMIN_DEPARTMENT_BY_ID_API: (id: string) => `/admin/departments/${id}`,
    UPDATE_ADMIN_DEPARTMENT_BY_ID_API: (id: string) => `/admin/departments/${id}`,
    DELETE_ADMIN_DEPARTMENT_BY_ID_API: (id: string) => `/admin/departments/${id}`,

    // attendance
    MARK_ATTENDANCE_API: (id: string) => `/attendance/mark/${id}`,
    GET_ATTENDANCE_BY_EMP_ID_API: (employeeId: string) => `/attendance/employee/${employeeId}`,
    GET_ATTENDANCE_BY_DATE_API: (date: string) => `/attendance/date/${date}`,
    GET_ATTENDANCE_API: '/attendance/all',
    GET_EMPLOYEE_ATTENDANCE_STATUS_API: (empId: string, date: string) => `/attendance/status/${empId}/${date}`,

    // leave
    REQUEST_LEAVE_API: (id: string) => `/leave/request/${id}`,
    APPROVE_LEAVE_API: (id: string) => `/leave/approve/${id}`,
    GET_LEAVES_BY_EMP_ID_API: (id: string) => `/leave/all/${id}`,
    GET_PENDING_LEAVE_API: '/leave/pending/all',

    // Performance
    SAVE_PERFORMANCE_API: '/performance/save',
    GET_PERFOMANCE_BY_EMPLOYEE_API: (empId: string) => `/performance/employee/${empId}`,
    GET_PERFOMANCE_BY_PERIOD: (period: string) => `/period/${period}`,


    // admin-holidays
    GET_ADMIN_HOLIDAYS_API: '/admin/holidays',
    GET_ADMIN_HOLIDAY_BY_ID_API: (holidayId: string) => `/admin/holidays/${holidayId}`,
    CREATE_ADMIN_HOLIDAY_API: '/admin/holidays',
    UPDATE_ADMIN_HOLIDAY_BY_ID_API: (holidayId: string) => `/admin/holidays/${holidayId}`,
    DELETE_ADMIN_HOLIDAY_BY_ID_API: (holidayId: string) => `/admin/holidays/${holidayId}`,

    // Employee Holidays
    GET_EMPLOYEE_HOLIDAYS_API: '/app/holidays/employee',
}

export default API_ENDPOINTS