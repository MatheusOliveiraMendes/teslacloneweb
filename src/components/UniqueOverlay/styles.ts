import styled from 'styled-components';
import { motion } from 'framer-motion';

import { LogoSVG } from './IconSVG'

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;
    min-height: 52px;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        li {
            list-style: none;

            font-size: 16px;

            & + li {
                margin: 10px 0 0;
            }

            a {
                text-decoration: none;
                color: white;

                &:hover {
                    color: #000;
                }
            }
        }
    }

    margin-bottom: 30px;

    @media (min-width: 600px) {
        margin-bottom: 38px;

        ul {
            flex-direction: row;

            li + li {
                margin: 0 0 0 30px;
            }
        }
    }
`;

export const Logo = styled(LogoSVG)`
    cursor: pointer;
    width: 130px;
    height: 14px;
`;

export const Footer = styled(motion.footer)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        li {
            list-style: none;

            font-size: 14px;

            & + li {
                margin: 10px 0 0;
            }

            a {
                text-decoration: none;
                color: white;

                &:hover {
                    color: #000;
                }
            }
        }
    }

    margin-bottom: 30px;

    @media (min-width: 600px) {
        margin-bottom: 38px;

        ul {
            flex-direction: row;

            li + li {
                margin: 0 0 0 30px;
            }
        }
    }
`;