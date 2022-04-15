import {fireEvent, render, screen} from '@testing-library/react';
import FormCoding from './FormCoding';

describe('FormCoding', () => {


    test('render first', () => {
        render(<FormCoding/>);
    });

    test('Testing judul program', () => {
        render(<FormCoding/>);
        const judul = screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i);
        expect(judul).toBeInTheDocument();
    });

    test('value check', () => {
        render(<FormCoding/>);
        fireEvent.input(screen.getByRole('textbox', {name:/nama/i}), {target:{value: 'Budi'}});
        expect(screen.getByRole('textbox', {name:/nama/i}).value).toBe('Budi');
    })

    // test('Testing handleSubmit', aysnc, () => {
    //     const data = {nama: 'Budi', email: 'budi123@gmail.com', noHandphone: '08123456789', pendidikan: 'IT', kelas: 'reactjs'}; 
    //     const mock = jest.fn();
    //     const {getByText} = render(<FormCoding onSubmit={mock}/>);
    //     const form = await waitForElement(() => getByText(/submit/i));
    //     fireEvent.submit(form);
    //     expect(mock).toHaveBeenCalled();
    // })
})