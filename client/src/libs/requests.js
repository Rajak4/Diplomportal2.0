import axios from 'axios'

const parseResponseOrError = response => {
    console.log("resp", response)
    return {
	data: response.data || response,
	success: !!(response && response.data)
    }
}

const parseError = e => {
	console.error('error: ',e.response.data);
	return `${e}: ${JSON.stringify(e.response.data)}`
}

const query = async (method, query, data = {}) => 
	parseResponseOrError(await axios[method](query, data).catch(parseError))

export const getStudents = async () =>
    await query('get', 'localhost:8000/students')

export const getStudent = async (id) =>
    await query('get', `localhost:8000/students/${id}`)

export const getcourses = async () =>
    await query('get', 'localhost:8000/courses')

export const getcourse = async (id) =>
    await query('get', `localhost:8000/courses/${id}`)