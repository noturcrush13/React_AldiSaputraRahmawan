import {fireEvent, render, screen} from '@testing-library/react';
import Search from './Search';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('Search', () => {
    test('test render', () => {
        render(<Search/>);
    })
    

    // test('carijudul', () => {
    //     render(<Search/>);
    //     const judul = screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i);
    // })

    test('onchange event', () => {
        const onChange = jest.fn();
        render(<Search value="" onChange={onChange}>
            Cari Cerita:
        </Search>
        );
        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'internet'}});
        expect(onChange).toHaveBeenCalledTimes(0);
    })

    test('fecth event berhasil', async () => {
        const cerita = [
            {objectID: '1', title: 'Hello'},
            {objectID: '2', title: 'React'},
        ];
        axios.get.mockImplementationOnce(() => 
            Promise.resolve({data: {hits: cerita} })
        );
        render(<Search/>);
        await userEvent.type(screen.getByRole('button'));
        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(2);
    })

    test('fecth event gagal', async () => {
        axios.get.mockImplementationOnce(() => 
            Promise.reject({message: 'error'})
        );
        render(<Search/>);
        await userEvent.type(screen.getByRole('button'));
        const error = await screen.findByText(/error/i);
        expect(error).toBeInTheDocument();
    })
})