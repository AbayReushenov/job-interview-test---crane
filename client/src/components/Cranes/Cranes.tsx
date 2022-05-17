import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCranes } from '../../store/crane/selectors';
import { Item } from './Item/Item';
import './styles.css';

export const Cranes = () => {
  const cranes = useSelector(selectCranes);
  const [first,] = cranes;
  const [id, setId] = useState('');
  const [current, setCurrent] = useState(first);
  function handlerOnChange(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    setId(value);
    event.preventDefault();
  }
  useEffect(() => {
    const currentId = cranes.find((item) => item._id === id);
    if (currentId) {
      setCurrent(currentId);
    }
  }, [cranes, id]);

  return (
    <div>
      <div>
        <select className='custom-select' defaultValue={'DEFAULT'} onChange={handlerOnChange}>
        <option value="DEFAULT" disabled>Выберите ...</option>
          {cranes.map((item) => (
            <option value={item._id} key={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className='container'>
        {current && (
          <div className='box'>
            <ul className='crane'>
              <li className='line '>
                <h3 className='header left'>Готовность крана</h3>
                <p className='center'>____________________________________</p>
                {Object.values(current).some((one) => one === false) ? (
                  <p className='right red'>нет</p>
                ) : (
                  <p className='right green'>готов</p>
                )}
              </li>
              <li className='line'>
                <Item text='Ключ бирка' value={current.key} />
              </li>
              <li className='line'>
                <Item text='Кнопка пуск' value={current.start} />
              </li>
              <li className='line'>
                <Item text='Концевики' value={current.limits} />
              </li>
              <li className='line'>
                <Item text='Автоматы' value={current.automates} />
              </li>
              <li className='line'>
                <Item text='Ошибки контроллера' value={current.controllers} />
              </li>
              <li className='line'>
                <Item text='Аварийные кнопки' value={current.accidents} />
              </li>
              <li className='line'>
                <Item
                  text='Готовность по температуре'
                  value={current.temperature}
                />
              </li>
              <li className='line'>
                <Item text='Нет запрета по ОГП' value={current.ogp} />
              </li>
              <li className='line'>
                <Item
                  text='Реле защиты перенапряжения'
                  value={current.voltage}
                />
              </li>
              <li className='line'>
                <Item text='Реле контроля цепи' value={current.current} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
