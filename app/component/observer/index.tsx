'use client';
import { InView, useInView } from 'react-intersection-observer';
import styles from './observe.module.css';
import Featured from '../featured';
import ScrollWrapper from './scrollView';
import cls from 'classnames';
import { useEffect, useState } from 'react';

type ViewObserverProp = {
  featured: {
    name: string;
    description: string;
    stack: string;
    links: {
      label: string;
      path: string;
      icon: string;
    }[];
  }[];
  title: string;
};

const ViewObserver = ({ featured, title }: ViewObserverProp) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <InView>
      {() => {
        return (
          <ScrollWrapper inView={inView}>
            <div ref={ref}>
              <h3
                className={cls(
                  styles.title_header,
                  inView ? styles.title_view : 'bg-transparent shadow-none'
                )}
              >
                {title}
              </h3>
              <aside className="px-6">
                <Featured
                  details={featured}
                  fullwidth={true}
                  title="Featured"
                  page="home"
                />
              </aside>
            </div>
          </ScrollWrapper>
        );
      }}
    </InView>
  );
};

export default ViewObserver;
