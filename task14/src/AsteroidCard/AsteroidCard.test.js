import { AsteroidCard } from "./AsteroidCard"
import { screen, render, fireEvent } from '@testing-library/react'
import { AsteroidsContext } from "../App";
import { emptyGlobalState } from "../Reducers";
import "@testing-library/jest-dom"

describe('AsteroidCard component', () => {
    it('should call dispatch method after button click', () => {
        const mockDispatch = jest.fn();

        const view = render(<AsteroidsContext.Provider value={{state:emptyGlobalState, dispatch:mockDispatch}}>
                                <AsteroidCard name="" date="" distance={10} size={0} grade="не опасен" id="123"/>
                            </AsteroidsContext.Provider>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(mockDispatch).toHaveBeenCalled();

        const textNode = screen.getByText(/Размер/);
        
    })

    it('should call onClick prop after card click', () => {
        const mockDispatch = jest.fn();
        const mockOnClick = jest.fn();

        const view = render(<AsteroidsContext.Provider value={{state:emptyGlobalState, dispatch:mockDispatch}}>
            <AsteroidCard onClick={mockOnClick} name="NEWNAME" date="" distance={10} size={0} grade="опасен" id="123"/>
        </AsteroidsContext.Provider>);

        const card = screen.getByText('NEWNAME');
        expect(card).toBeInTheDocument();

        fireEvent.click(card);
        fireEvent.click(card);
        expect(mockOnClick).toHaveBeenCalledTimes(2);
    })
});


