import React, { Component } from 'react'
import Cube from '../Cube'
import CubeFrontImage from 'image/CubeFrontImage.png'
import CubeTopImage from 'image/CubeFrontImage.png'
import CubeBackImage from 'image/CubeBackImage.png'
import CubeBottomImage from 'image/CubeBottomImage.png'
import './style.scss'

class CubeSlideShow extends Component {
    static defaultProps = {
        colsCount: 4,
        rowsCount: 6
    }

    render() {
        const colsCount = this.props.colsCount;
        const rowsCount = this.props.rowsCount;

        let allCubeList = [];

        for (let col = 0; col < colsCount; col++) {
            var top = 100 / colsCount * col;
            for (let row = 0; row < rowsCount; row++) {
                var left = 100 / rowsCount * row;
                const cubeWrapperStyle = {
                    left: `${left}%`,
                    top: `${top}%`
                }
                const cubeItemsInfo = [
                    {
                        style: {
                            backgroundImage: `url(${CubeFrontImage})`,
                            backgroundPosition: `${left}% ${top}%`
                        }
                    },
                    {
                        style: {
                            backgroundImage: `url(${CubeTopImage})`,
                            backgroundPosition: `${left}% ${top}%`
                        }
                    },
                    {
                        style: {
                            backgroundImage: `url(${CubeFrontImage})`,
                            backgroundPosition: `${left}% ${top}%`
                        }
                    },
                    {
                        style: {
                            backgroundImage: `url(${CubeTopImage})`,
                            backgroundPosition: `${left}% ${top}%`
                        }
                    },
                    {
                        style: {
                            backgroundImage: `url(${CubeBackImage})`,
                            backgroundPosition: `${left}% ${top}%`
                        }
                    },
                    {
                        style: {
                            backgroundImage: `url(${CubeBottomImage})`,
                            backgroundPosition: `${left}% ${top}%`
                        }
                    }

                ]
                allCubeList.push(
                    <Cube cubeWrapperStyle={cubeWrapperStyle}
                        key={`${row}${col}`}
                        cubeItemsInfo={cubeItemsInfo}></Cube>
                );
            }
        }

        return (
            <div className="cube-slide-show-wrapper"
                style={{ width: `${rowsCount}rem`, height: `${colsCount}rem` }}>
                {allCubeList}
            </div>
        )
    }
}

export default CubeSlideShow