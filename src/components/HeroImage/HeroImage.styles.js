import styled from 'styled-components';


export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%
        ),
        url(${({image}) => image}),
        var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroImage 1s;


    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);
    max-width: 700px;
    
    h1 {
        font-size: var(--fontXL);

        @media (max-width: 720px){
            font-size: var(--fontL);
        }

    }

    p {
        font-size: var(--fontM);

        @media (max-width: 720px){
            font-size: var(--fontS);
        }

    }

    @media (max-width: 720px){
        max-width: 100%;
    }
`;